// src/lib/canvas.js

const { createCanvas, loadImage } = require('@napi-rs/canvas')
const axios = require('axios')
const sharp = require('sharp')
const https = require('https')

const httpsAgent = new https.Agent({ rejectUnauthorized: false })

const RARITY_MAP = {
    'Divine': { color: '#ff4757', tier: 'Divine', cult: 'Transcendent (16th+ Stage)', glow: 'rgba(255,71,87,0.4)', defaultEmoji: '❤️' },
    'Legendary': { color: '#ffd700', tier: 'Legendary', cult: 'God (13th-15th Stage)', glow: 'rgba(255,215,0,0.4)', defaultEmoji: '💛' },
    'Epic': { color: '#9b59b6', tier: 'Epic', cult: 'Dao (10th-12th Stage)', glow: 'rgba(155,89,182,0.4)', defaultEmoji: '💜' },
    'Rare': { color: '#3498db', tier: 'Rare', cult: 'Soul (7th-9th Stage)', glow: 'rgba(52,152,219,0.4)', defaultEmoji: '💙' },
    'Uncommon': { color: '#2ecc71', tier: 'Uncommon', cult: 'Spirit (4th-6th Stage)', glow: 'rgba(46,204,113,0.4)', defaultEmoji: '💚' },
    'Common': { color: '#ffffff', tier: 'Common', cult: 'Mortal (1st-3rd Stage)', glow: 'rgba(255,255,255,0.4)', defaultEmoji: '🤍' }
}

async function generateCard(params) {
    let { name, rarity, emoji, atk, def, hp, imageUrl } = params
    
    const rarityInfo = RARITY_MAP[rarity] || RARITY_MAP['Common']
    emoji = (emoji && emoji !== '❓') ? emoji : rarityInfo.defaultEmoji;
    const width = 500
    const height = 500
    
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
    
    // Helper untuk rounded rectangle yang aman
    const drawRoundRect = (x, y, w, h, r) => {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
    };
    
    const cx = width / 2;
    const cy = height / 2;
    
    // 1. Draw Background Image (Full Cover)
    ctx.fillStyle = '#0f0f23';
    ctx.fillRect(0, 0, width, height);

    if (imageUrl) {
        try {
            let img;
            if (imageUrl.startsWith('http')) {
                // Download image manually with axios to bypass node-canvas SSL limitations
                const response = await axios.get(imageUrl, { 
                    responseType: 'arraybuffer',
                    httpsAgent: httpsAgent
                });
                // Convert to PNG buffer to bypass node-canvas WebP unsupported error
                const pngBuffer = await sharp(response.data).png().toBuffer();
                img = await loadImage(pngBuffer);
            } else {
                img = await loadImage(imageUrl);
            }
            let sx = 0, sy = 0, sWidth = img.width, sHeight = img.height;
            const size = Math.min(img.width, img.height);
            
            if (img.width > img.height) {
                sWidth = size;
                sx = (img.width - size) / 2; // Center horizontal
            } else {
                sHeight = size;
                // Posisi crop di-set 25% dari atas (0.25) agar wajah / kepala pas di tengah (tidak terpotong)
                sy = (img.height - size) * 0.25; 
            }
            
            // Gambar mengisi SELURUH background (500x500)
            ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, width, height);
        } catch (e) {
            ctx.fillStyle = '#1c1c38';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = 'rgba(255,255,255,0.1)';
            ctx.font = '150px Arial, "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(emoji, cx, cy + 50);
        }
    } else {
        ctx.fillStyle = '#1c1c38';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        ctx.font = '150px Arial, "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(emoji, cx, cy + 50);
    }
    
    // 2. Gradient Overlay (Gelap di atas & bawah agar teks terbaca jelas)
    const overlayGrad = ctx.createLinearGradient(0, 0, 0, height);
    overlayGrad.addColorStop(0, 'rgba(0,0,0,0.6)');
    overlayGrad.addColorStop(0.2, 'rgba(0,0,0,0.0)');
    overlayGrad.addColorStop(0.6, 'rgba(0,0,0,0.2)');
    overlayGrad.addColorStop(1, 'rgba(0,0,0,0.9)');
    ctx.fillStyle = overlayGrad;
    ctx.fillRect(0, 0, width, height);
    
    // 3. Premium Outer Border (Sesuai warna Rarity)
    ctx.strokeStyle = rarityInfo.color;
    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, width, height);
    
    // Inner glowing border (Glassmorphism effect)
    ctx.shadowColor = rarityInfo.color;
    ctx.shadowBlur = 15;
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineWidth = 2;
    drawRoundRect(15, 15, width - 30, height - 30, 15);
    ctx.stroke();
    ctx.shadowBlur = 0; // reset
    
    // 4. Header UI (Absolute Floating di Atas)
    // Name Tag (Kiri Atas)
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.strokeStyle = rarityInfo.color;
    ctx.lineWidth = 1.5;
    drawRoundRect(25, 25, 230, 35, 10);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 16px Arial, "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(emoji + ' ' + name, 40, 48);
    
    // Tier Badge (Kanan Atas)
    ctx.fillStyle = rarityInfo.color;
    drawRoundRect(width - 145, 25, 120, 35, 10);
    ctx.fill();
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(rarityInfo.tier.toUpperCase(), width - 85, 48);
    
    // 5. Stats UI (Absolute Floating di Bawah)
    const statY = 360;
    const statW = 120;
    const statGap = 20;
    const statStartX = cx - (statW * 1.5) - statGap;
    
    const stats = [
        { label: 'ATK', value: atk, color: '#ff4757', icon: '⚔️' },
        { label: 'DEF', value: def, color: '#1e90ff', icon: '🛡️' },
        { label: 'HP', value: hp, color: '#2ed573', icon: '❤️' }
    ];
    
    stats.forEach((stat, i) => {
        const x = statStartX + (i * (statW + statGap));
        
        // Glassmorphism Box untuk Stat
        ctx.fillStyle = 'rgba(0,0,0,0.75)';
        ctx.strokeStyle = stat.color; 
        ctx.lineWidth = 2;
        drawRoundRect(x, statY, statW, 70, 12);
        ctx.fill();
        ctx.stroke();
        
        // Text Shadow untuk efek Pop
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 5;
        
        ctx.fillStyle = '#ddd';
        ctx.font = 'bold 12px Arial, "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(stat.icon + ' ' + stat.label, x + statW / 2, statY + 25);
        
        ctx.shadowBlur = 0; // reset
        
        ctx.fillStyle = stat.color;
        ctx.font = 'bold 26px Arial';
        ctx.fillText(stat.value, x + statW / 2, statY + 55);
    });
    
    // 6. Footer (Cultivation Stage di bagian terbawah)
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.font = 'italic 13px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Cultivation: ' + rarityInfo.cult, cx, 465);
    
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '10px Arial';
    ctx.fillText('✦ @air1102 | Nadel ✦', cx, 482);
    
    return await canvas.encode('jpeg', 85);
}

module.exports = { generateCard, RARITY_MAP }

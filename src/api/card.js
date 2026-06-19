// src/api/card.js (Vercel Serverless Function)

const { generateCard } = require('../lib/canvas')
const { CHARACTERS } = require('../lib/characters')

module.exports = async (req, res) => {
    let params = req.query || {}
    
    // Sistem Keamanan API Key
    const VALID_API_KEY = process.env.API_KEY || 'masternadel';
    if (params.apikey !== VALID_API_KEY) {
        return res.status(401).json({ 
            error: 'Unauthorized', 
            message: 'Akses Ditolak. Silakan masukkan parameter apikey yang valid. Contoh: ?character=wang-lin&apikey=masternadel' 
        });
    }
    
    // Jika user memanggil preset karakter tertentu (contoh: ?character=wang-lin-thunder)
    if (params.character && CHARACTERS[params.character]) {
        // Timpa nilai kosong dengan data preset karakter
        params = { ...CHARACTERS[params.character], ...params };
    }
    
    // Validasi parameter wajib
    const required = ['name', 'rarity', 'atk', 'def', 'hp']
    for (const key of required) {
        if (!params[key]) {
            return res.status(400).json({ 
                error: `Parameter "${key}" wajib diisi. Atau gunakan preset, misal: ?character=wang-lin-thunder`,
                required: required
            });
        }
    }
    
    // Fitur API JSON: Jika user meminta format JSON untuk mengambil angka stats-nya saja
    if (params.json === 'true') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.status(200).json({
            name: params.name,
            rarity: params.rarity,
            emoji: params.emoji || '❓',
            atk: parseInt(params.atk) || 0,
            def: parseInt(params.def) || 0,
            hp: parseInt(params.hp) || 0,
            image: params.image || '',
            author: '@air1102 | Nadel'
        });
    }
    
    // Handle gambar dari URL atau folder lokal "/gambar"
    let imagePath = '';
    if (params.image) {
        if (params.image.startsWith('http')) {
            imagePath = params.image; // Pakai URL langsung
        } else {
            // Coba cari di folder "gambar"
            const localPath = path.join(process.cwd(), 'gambar', params.image);
            const fallbackPath = path.join(__dirname, '../../gambar', params.image);
            
            if (fs.existsSync(localPath)) {
                imagePath = localPath;
            } else if (fs.existsSync(fallbackPath)) {
                imagePath = fallbackPath;
            } else {
                console.warn('Gambar lokal tidak ditemukan:', params.image);
            }
        }
    }
    
    try {
        const imageBuffer = await generateCard({
            name: params.name,
            rarity: params.rarity,
            emoji: params.emoji || '❓',
            atk: parseInt(params.atk) || 0,
            def: parseInt(params.def) || 0,
            hp: parseInt(params.hp) || 0,
            desc: params.desc || '',
            imageUrl: imagePath
        })
        
        res.setHeader('Content-Type', 'image/jpeg');
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.status(200).send(imageBuffer);
        
    } catch (error) {
        console.error('Error generating card:', error)
        return res.status(500).json({
            error: 'Gagal membuat kartu karakter',
            details: error.message
        });
    }
}

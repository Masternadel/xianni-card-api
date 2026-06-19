// src/api/card.js (Netlify Function)

const { generateCard } = require('../lib/canvas')
const { CHARACTERS } = require('../lib/characters')
const path = require('path')
const fs = require('fs')

exports.handler = async (event) => {
    let params = event.queryStringParameters || {}
    
    // Sistem Keamanan API Key
    const VALID_API_KEY = process.env.API_KEY || 'masternadel';
    if (params.apikey !== VALID_API_KEY) {
        return {
            statusCode: 401,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ 
                error: 'Unauthorized', 
                message: 'Akses Ditolak. Silakan masukkan parameter apikey yang valid. Contoh: ?character=wang-lin&apikey=masternadel' 
            })
        }
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
            return {
                statusCode: 400,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    error: `Parameter "${key}" wajib diisi. Atau gunakan preset, misal: ?character=wang-lin-thunder`,
                    required: required
                })
            }
        }
    }
    
    // Fitur API JSON: Jika user meminta format JSON untuk mengambil angka stats-nya saja
    if (params.json === 'true') {
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                name: params.name,
                rarity: params.rarity,
                emoji: params.emoji || '❓',
                atk: parseInt(params.atk) || 0,
                def: parseInt(params.def) || 0,
                hp: parseInt(params.hp) || 0,
                image: params.image || '',
                author: '@air1102 | Nadel'
            })
        }
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
        
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'image/jpeg',
                'Cache-Control': 'public, max-age=86400'
            },
            body: imageBuffer.toString('base64'),
            isBase64Encoded: true
        }
    } catch (error) {
        console.error('Card generation error:', error)
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                error: 'Internal server error',
                message: error.message
            })
        }
    }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"img.playbook.com",
                
            },
            {
                hostname:"res.cloudinary.com"
            }
        ]
    }
}

module.exports = nextConfig

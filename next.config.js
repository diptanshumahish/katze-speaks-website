/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"img.playbook.com",
                
            }
        ]
    }
}

module.exports = nextConfig

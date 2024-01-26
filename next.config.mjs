/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname: 'https://raw.githubusercontent.com/',
            }
        ],
    }
};

//75    

export default nextConfig;

interface AuthConfiguration {
    clientID: string,
    domain: string,
    callbackURL: string    
}

//Client and Domain given by Auth0
export const myConfig: AuthConfiguration = {
    clientID: 'gi38HZKve3cnAVHvMmylJ70v0x8NA2x8',
    domain: 'vijayakumarm.auth0.com',
    callbackURL: 'http://localhost:4200/'
};

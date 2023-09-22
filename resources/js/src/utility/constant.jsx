const BACK_ENPOINT = 'api'
export const DOMAIN = ''

export default {
    url: `${DOMAIN}/${BACK_ENPOINT}`,
    mediaUrl: `${DOMAIN}`,
    tokenType: 'Bearer',
    storageUserDataKeyName: 'USER-DATA',
    appRole: {
        admin: 'admin',
    }
    
}
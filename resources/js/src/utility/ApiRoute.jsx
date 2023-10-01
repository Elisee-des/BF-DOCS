export default {
    //PUBLIC
    connexion:'/connexion',

    //ADMIN
    universites:'admin/universites',
    villes:'/admin/villes',

    handlerError: (error) => _handlerError(error)
}

const _handlerError = (error) => {
    const response = error.response
    if(response) {
        const messageData = response?.data?.messageData
        const message = response?.data?.message
        if(messageData) {
            return getMessage(messageData)
        } else if(message) {
            return getMessage(message)
        } else {
            return response?.statusText
        }
    } else {
        return 'Oops !! Léger souci.'
    }
}

const getMessage = (message = {}) => {
    let _message = '';
    if(typeof message == 'object') {
        for (const key in message) {
            if (message.hasOwnProperty(key)) {
                _message+= ' '+ message[key];
            }
        }
        _message
    } else {
        _message = message;
    }
    return _message
}
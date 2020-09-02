const twilio = require('twilio')
const { VoiceGrant } = require('twilio/lib/jwt/AccessToken')
const AccessToken = twilio.jwt.AccessToken
const { VideoGrant } = AccessToken

const generateToken = config => {
    return new AccessToken(
        config.twilio.accountSid,
        config.twilio.apiKey,
        config.twilio.apiSecret
    )
}

const videoToken = (identity, config) => {
    const token = generateToken(config)
    token.identity = identity
    return token
}

module.exports = videoToken
# sip-blind-transfer

This application illustrates a simple example of handling an incoming SIP refer from a sip phone to perform a blind transfer.

This application was created with the [create jambonz command](https://www.npmjs.com/package/create-jambonz-app).  

## Endpoints

Based on the options that you have chosen, this application exposes the following HTTP endpoints:

### /auth
A simple example of authenticating sip devices.

### /dial
Dials out through your carrier to the number provided in the To header of the SIP INVITE. Once the call is established, an incoming SIP REFER from the originating device will cause a blind transfer to the number provided in the Refer-To header.




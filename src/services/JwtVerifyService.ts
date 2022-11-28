import {decode} from 'jsonwebtoken'

export class JwtVerifyService{
    async decoder(token){
      const payload = decode(token)

      console.log(payload)
    }
}

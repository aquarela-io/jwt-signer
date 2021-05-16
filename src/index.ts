import * as fs from 'fs'
import * as jwt from 'jsonwebtoken'

type JwtProps = {
    keyPath: string
    payload: {
        [key: number]: string
    }
    inline?: string | Buffer
    options?: {
        [key: number]: string
    }
}

type JwtSign = {
    valid: boolean
    payload: {
        [key: number]: string | number
    } | void
    token: string
}

export function jwtSign({ keyPath, payload, options, inline }: JwtProps): string | void | JwtSign {
    try {
        const privateKey = inline ? Buffer.from(inline) : __readKey(keyPath)

        const generatedToken = jwt.sign(payload, privateKey, options)
        const isValid: string | void = jwt.verify(
            generatedToken,
            privateKey,
            options,
            (err, decoded) => {
                return err ? err : (decoded as any)
            }
        )

        return { valid: true, payload: isValid, token: generatedToken }
    } catch (err) {
        return __handleError(err)
    }
}

type ErrorProps = {
    err?: string
    message?: string
}

function __handleError({ err, message }: ErrorProps) {
    const provider = '[ jwt-signer ] Error: '
    throw new Error(provider + ' ' + message || err)
    return provider
}

function __readKey(keyPath: string) {
    try {
        return fs.readFileSync(keyPath)
    } catch (err) {
        return __handleError({
            message:
                'You need to specify an correct path to keyPath argument.\n If you want to use an raw value, use inline option instead.'
        })
    }
}

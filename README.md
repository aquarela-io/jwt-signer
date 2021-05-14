
<h1  align="center">Welcome to @aquarela/jwt-signer 👋</h1>

<p>

<a  href="https://www.npmjs.com/package/@aquarela/jwt-signer"  target="_blank">

<img  alt="Version"  src="https://img.shields.io/npm/v/@aquarela/jwt-signer.svg">

</a>

<a  href="https://github.com/aquarela-io/jwt-signer#readme"  target="_blank">

<img  alt="Documentation"  src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />

</a>

<a  href="#"  target="_blank">

<img  alt="License: MIT"  src="https://img.shields.io/badge/License-MIT-yellow.svg" />

</a>

<a  href="https://twitter.com/aquarela_io"  target="_blank">

<img  alt="Twitter: aquarela_io"  src="https://img.shields.io/twitter/follow/aquarela_io.svg?style=social" />

</a>

</p>

  

> Sign JWT Token with any Signature algorithm key.

  

### 🏠 [Homepage](https://aquarela.io)

  

## Install

```sh
#yarn
yarn add @aquarela/jwt-signer   

#npm
npm -i @aquarela/jwt-signer

 
```

## Usage
  
  You need only the private key (as file using **keyPath** or raw using **inline** argument)
  
 ```js
import { jwtSign } from  '@aquarela/jwt-signer' // Import the package

const  data  = {
sub:  "94828482248",
name:  "The Dude",
iat:  1516239022
} // Create Payload Data

console.log(jwtSign({keyPath:  './private.pem', payload:  data}))

// output: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NDgy(...)
 
```

### Options

There 4 argument on **jwtSign**: *keyPath or inline* (required), *payload* (required) and *options*.

#### keyPath (@string) *required (can be swapped with inline argument)

keyPath support local or external paths of your private key.
```js
import { jwtSign } from  '@aquarela/jwt-signer' // Import the package

(...)
console.log(jwtSign({
			keyPath:  './private.pem', // private key file on the root folder.
			(...)}))

// output: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NDgy(...)
 
```

#### inline (@string) *required (can be swapped with keyPath argument)

inline support raw private key data.
```js
import { jwtSign } from  '@aquarela/jwt-signer'

(...)

const  rawData  =  `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDUi8T6pRUhWdA+g8hlebFMzRRoM0MCnqMoHg/IEmd0pY1t9O0J
oDLXCcCEguTJaaw73y7TwHERgxE1Ma/mExIQtMTgrpVBgVCOw1tsz5Kf7xGNXH5f
(...)
-----END RSA PRIVATE KEY-----`

  

console.log(jwtSign({
	keyPath:  '',
	inline:  rawData,
	(...)
}))
 
// output: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NDgy(...)
```

#### payload (@object) *required 

payload is the data  as JSON Object your gonna embed in your jwt token.
You can see an [example here](https://self-issued.info/docs/draft-ietf-oauth-json-web-token.html#ExampleJWT).

```js
import { jwtSign } from  '@aquarela/jwt-signer' // Import the package

const data =  { sub:  "94828482248", name:  "The Dude", iat:  1516239022 }

(...)
console.log(jwtSign({(...)
			payload:  data}))

// output: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NDgy(...)
```

#### options (@object) *required 

payload is the data as JSON Object  you can configure some things as algorithm.

```js
import { jwtSign } from  '@aquarela/jwt-signer' // Import the package

(...)

/**

* Signature algorithm. Could be one of these values :
* - HS256: HMAC using SHA-256 hash algorithm (default)
* - HS384: HMAC using SHA-384 hash algorithm
* - HS512: HMAC using SHA-512 hash algorithm
* - RS256: RSASSA using SHA-256 hash algorithm
* - RS384: RSASSA using SHA-384 hash algorithm
* - RS512: RSASSA using SHA-512 hash algorithm
* - ES256: ECDSA using P-256 curve and SHA-256 hash algorithm
* - ES384: ECDSA using P-384 curve and SHA-384 hash algorithm
* - ES512: ECDSA using P-521 curve and SHA-512 hash algorithm
* - none: No digital signature or MAC value included

*/

const  options  = {
	algorithm:  'RS512'
}

(...)
console.log(jwtSign({(...)
			options:  options}))

// output: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NDgy(...)
```

Thats it.
## Author

  

👤 **AQUARELA**

  

* Website: https://aquarela.io

* Twitter: [@aquarela_io](https://twitter.com/aquarela_io)

* Github: [@aquarela-io](https://github.com/aquarela-io)

  

## Show your support

  

Give a ⭐️ if this project helped you!

  

***
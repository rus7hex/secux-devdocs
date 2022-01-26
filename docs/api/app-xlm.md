---
title: '@secux/app-xlm'
---


## SecuxXLM

XLM package for SecuX device

**Kind**: global class  
<h2>Properties</h2>

### prepareAddress
***
SecuxXLM.prepareAddress ⇒ <code>communicationData</code>
***

*Prepare data for XLM address.*

**Returns**: <code>communicationData</code> - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path (hardened child key), ex: m/44'/148'/0' |

<br/>

### addressConvert
***
SecuxXLM.addressConvert(publickey) ⇒ <code>string</code>
***

*Convert ED25519 publickey to XLM address.*

**Returns**: <code>string</code> - XLM address  

| Param | Type | Description |
| --- | --- | --- |
| publickey | <code>string</code> \| <code>Buffer</code> | ed25519 publickey |

<br/>

### resolveAddress
***
SecuxXLM.resolveAddress(response) ⇒ <code>string</code>
***

*Generate XLM address from response data.*

**Returns**: <code>string</code> - XLM address  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |

<br/>

### preparePublickey
***
SecuxXLM.preparePublickey(path) ⇒ <code>communicationData</code>
***

*Prepare data for ed25519 publickey.*

**Returns**: <code>communicationData</code> - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path (hardened child key), ex: m/44'/148'/0' |

<br/>

### resolvePublickey
***
SecuxXLM.resolvePublickey(response) ⇒ <code>string</code>
***

*Resove ed25519 publickey from response data.*

**Returns**: <code>string</code> - ed2519 publickey (hex string)  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |

<br/>

### prepareSign
***
SecuxXLM.prepareSign(path, content) ⇒ [<code>prepared</code>](#prepared)
***

*Prepare data for signing.*

**Returns**: [<code>prepared</code>](#prepared) - prepared object  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path (hardened child key), ex: m/44'/148'/0' |
| content | [<code>txDetail</code>](#txDetail) | transaction object |

<br/>

### resolveSignature
***
SecuxXLM.resolveSignature(response) ⇒ <code>string</code>
***

*Resolve signature from response data.*

**Returns**: <code>string</code> - signature (hex string)  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |

<br/>

### resolveTransaction
***
SecuxXLM.resolveTransaction(response, serialized) ⇒ <code>string</code>
***

*Generate raw transaction for broadcasting.*

**Returns**: <code>string</code> - signed raw transaction  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |
| serialized | <code>communicationData</code> | serialized object |

<br/>


## Types


<a name="SecuxXLM"></a>





<a name="txDetail"></a>

### txDetail

| Name | Type | Description |
| --- | --- | --- |
| from | <code>string</code> | sending address |
| to | <code>string</code> | receiving address |
| amount | <code>string</code> | transfer amount |
| sequence | <code>string</code> \| <code>number</code> |  |
| fee | <code>string</code> \| <code>number</code> |  |
| [memo] | [<code>memoObj</code>](#memoObj) |  |
| [networkPassphrase] | <code>string</code> | network for XLM, default is mainnet |
| [needCreateAccount] | <code>boolean</code> | pay for creating new account, default: false |


<a name="memoObj"></a>

### memoObj

| Name | Type | Description |
| --- | --- | --- |
| Type | <code>string</code> | MemoType |
| Value | <code>string</code> |  |


<a name="prepared"></a>

### prepared

| Name | Type | Description |
| --- | --- | --- |
| commandData | <code>communicationData</code> | data for sending to device |
| serialized | <code>communicationData</code> | serialized object |

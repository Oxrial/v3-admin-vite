<script lang="ts" setup>
import JSEncrypt from "jsencrypt-oxr"
const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCd5u+zsCxxJoJ8DjceQGpVwzF2
TsbF3za16Hp8nuZ+yJcgSOCuIJrgrkuu9S243YnetsTHTRCBeSNMAX8qVZUwbExZ
R7Yn7Fb0jFrrXIwv/Xa6U8VIYCL4l+AfwAGAO4ph3uXydd6yRbpGxSJR6OElBcEx
RVIliciRco+4jjaXDQIDAQAB
-----END PUBLIC KEY-----`
const privateKey = `-----BEGIN PRIVATE KEY-----
MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAJ3m77OwLHEmgnwO
Nx5AalXDMXZOxsXfNrXoenye5n7IlyBI4K4gmuCuS671Lbjdid62xMdNEIF5I0wB
fypVlTBsTFlHtifsVvSMWutcjC/9drpTxUhgIviX4B/AAYA7imHe5fJ13rJFukbF
IlHo4SUFwTFFUiWJyJFyj7iONpcNAgMBAAECgYA3ChRrkfErz7yT+XCE/vcRxeQr
1PG8bz3m0o4/ejPl5Y2oFz8Z8wuJXbfL2HKDidVQ6GxW/CnQt6TyDWOCIirKFgSm
xSTWomYDBNZZ6pFTXDk1dZG9PEI4FQQzptoHgDQydURAlAJYhNzlpYVP0v65n6K8
Fj/2jRSUz6MorAvQAQJBAM0hxR9ZGu8D1LuzhCEH5Btf9kTuFpyb8dLTqCjC4nCK
AuHssv3p2IN9fY+mjjy4wtP5+bGgTRry4pTruERAKg0CQQDFDumTUnlugKbA55uU
JVV1YUrRZLkGjE/jnd/dvJhjjASxUnmxv7nlf9yuWG0zO+uxhxMT5VdeK1Ls+Kxt
xeEBAkB/5Uc/FVJKpavUX8fIxF+/haRJM9zbRguPNDILP/7oxdOoQukSkONSkEJh
9ymFyHiIq7m3usd4Pulwikt4Gj1dAkEAktBwb4Vj2VNaaaBlBjPmfqR09JrBS0Kg
hqnpzy8irg/0sxQKfMamPnlLtk1FVoWPLV3AdfNJa2yFxO3ksYhbAQJBAJXcjoxv
bsv9WG0O1+ai5zi3RICWsSDSEy+JEeCGkx7XepmbL0pXs2Yyzu70ZVLz/vL3RaXu
dpCZamzUzB28Vrc=
-----END PRIVATE KEY-----`

const encrypt = new JSEncrypt()
encrypt.setPublicKey(publicKey)
const longMessage = JSON.stringify(
  Array.from(new Array(100))
    .fill("壹贰叁肆伍陆柒捌玖拾佰仟")
    .map((i, index) => ({ name: `${index}${i}` }))
)
const encrypted = encrypt.encryptOxr(longMessage)
console.log("🚀 ~ file: js-encrypt.vue:141 ~ 公钥加密 encrypted:", encrypted)

const dencrypt = new JSEncrypt()
dencrypt.setPrivateKey(privateKey)
const dencrypted = dencrypt.decryptOxr(encrypted as string)
console.log("🚀 ~ file: js-encrypt.vue:17 ~ 私钥解密 dencrypted:", dencrypted)

const sencrypt = new JSEncrypt()
sencrypt.setPrivateKey(privateKey)
const sencrypted = sencrypt.encryptOxr("test", { by: "PrivateKey" })
console.log("🚀 ~ file: js-encrypt.vue:45 ~ sencrypted>>> :", sencrypted)
const sdencrypt = new JSEncrypt()
sdencrypt.setPublicKey(publicKey)
const sdencrypted = sdencrypt.decryptOxr(sencrypted as string, { by: "PublicKey" })
console.log("🚀 ~ file: js-encrypt.vue:45 ~ sencrypted>>> :", sdencrypted)
</script>

<template>
  <div class="app-container">...</div>
</template>

<style scoped></style>

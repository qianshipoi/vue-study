JWT 由三块组成，用户可以把 id 等信息保存到 payload 部分
    1、Header： base64enc({
                    "alg" : "HS256",
                    "typ" : "JWT"
                })
    2、Payload：base64enc({
                    "iis" : "toptal.com",
                    "exp" : "142642800",
                    "company" : "Toptal",
                    "awesome" : "true"
                })
    3、Signature：HMACSHA256(
                    base64enc(header)
                    + "-" +
                    base64enc(payload)
                    ,secret(Key)
                )
注意：header、payload 部分都是 base64编码，可以轻松的 base64解码 回来。因此 payload 相当于是明文的，所以不能在 payload 中保存不能让别人看到的机密信息。signature 的部分是根据 header + payload + secretKey 进行加密计算出来的，如果payload被篡改，就可以根据 signature 解密时候校验出来。

使用
    1、安装 JWT 包 ： 右键项目 --> 管理NuGet包 --> 搜索 JWT --> 安装 JWT。
    2、导入命名空间 ：
        using JWT;
        using JWT.Algorithms;
        using JWT.Serializers;
    3、创建 payload 部分 ： var payload = new Dictionary<string, object> {{"username",123},{ "password","admin"}};
    4、创建密钥：var key = "KuriyamaMirai";       
    5、创建 JWT 对象：
        加密:
            IJwtAlgorithm algorithm = new HMACSHA256Algorithm();
            IJsonSerializer serializer = new JsonNetSerializer();
            IBase64UrlEncoder urlEncoder = new JwtBase64UrlEncoder();
            IJwtEncoder encoder = new JwtEncoder(algorithm, serializer, urlEncoder);
            var token = encoder.Encode(payload, key);
        解密:
            try
            {
                IJsonSerializer serializer = new JsonNetSerializer();
                IDateTimeProvider dateTimeProvider = new UtcDateTimeProvider();
                IJwtValidator jwtValidator = new JwtValidator(serializer, dateTimeProvider);
                IBase64UrlEncoder base64UrlEncoder = new JwtBase64UrlEncoder();
                IJwtDecoder jwtDecoder = new JwtDecoder(serializer, jwtValidator, base64UrlEncoder);
                var json = jwtDecoder.Decode(token, key, verify: true);
                return json;
            }
            catch (Exception)
            {
                return "被篡改";
            }
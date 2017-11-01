package cn.magicdu.bookmark.utils;

import java.security.Key;
import java.util.Date;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;

import cn.magicdu.bookmark.pojo.Constant;
import cn.magicdu.bookmark.pojo.Users;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.crypto.MacProvider;
import net.sf.json.JSONObject;

public class AuthConfirm {
	

	public String createAuth(String username){
		Key key = MacProvider.generateKey();

		String compactJws = Jwts.builder()
		  .setSubject(username)
		  .signWith(SignatureAlgorithm.HS512, key)
		  .compact();
		return compactJws;
	}
	
	
	
	public String createJwt(String id, String subject, long ttlMillis){
		//ApiKey apiKey=new ApiKey();
		 //The JWT signature algorithm we will be using to sign the token
	    SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
	 
	    long nowMillis = System.currentTimeMillis();
	    Date now = new Date(nowMillis);
	 
	    //We will sign our JWT with our ApiKey secret
	    
		byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(Constant.ApiKey);
	    Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());
	 
	    //Let's set the JWT Claims
	    JwtBuilder builder = Jwts.builder().setId(id)
	                                .setIssuedAt(now)
	                                .setSubject(subject)
	                                .signWith(signatureAlgorithm, signingKey);
	 
	    //if it has been specified, let's add the expiration
	    if (ttlMillis >= 0) {
	    long expMillis = nowMillis + ttlMillis;
	        Date exp = new Date(expMillis);
	        builder.setExpiration(exp);
	    }
	 
	    //Builds the JWT and serializes it to a compact, URL-safe string
	    return builder.compact();
	}
	
	public String generateSubject(Users user){
		JSONObject jo = new JSONObject();
        jo.put("userId", user.getId());
        jo.put("userName", user.getUsername());
        return jo.toString();
	}
	
	
	public Claims parseJWT(String jwt) {
		 
	    //This line will throw an exception if it is not a signed JWS (as expected)
	    Claims claims = Jwts.parser()         
	       .setSigningKey(DatatypeConverter.parseBase64Binary(Constant.ApiKey))
	       .parseClaimsJws(jwt).getBody();
	    return claims;
	}
	
	
	
}

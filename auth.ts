import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

export const{handlers,signIn,signOut,auth} = NextAuth({
    providers:[Github({
        authorization: {
            params:{
                scope:"read:user repo",
            },
        },
    }),
],

callbacks:{
    async jwt({token,account}){
        if(account?.provider === "github"){
            token.accessToken = account.access_token as string;
        } 

        return token;
    },

    async session({ session, token }) {
        session.accessToken = token.accessToken as string;
        return session;
    },
    },
});


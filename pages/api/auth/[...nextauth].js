import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                try {
                    const response = await fetch("https://fakestoreapi.com/auth/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(credentials),
                    });
                    if (response.ok) {
                        const user = await response.json();
                        console.log(user);
                        return Promise.resolve(user);
                    } else {
                        const error = await response.text();
                        return Promise.resolve(null);
                    }
                } catch (error) {
                    console.error("Lỗi đăng nhập:", error);
                    return Promise.resolve(null);
                }
            },
        }),
    ],
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60, // Thời gian sống tối đa của phiên (30 ngày)
        updateAge: 24 * 60 * 60, // Thời gian sống tối đa sau khi cập nhật phiên (24 giờ)
    },
    secret: process.env.NEXTAUTH_SECRET,
});

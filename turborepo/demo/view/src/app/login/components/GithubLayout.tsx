import { SessionProvider } from "next-auth/react";
import { GithubPage } from "./GithubPage";

export const GithubLayout = ()  => <SessionProvider>
    <GithubPage/>
</SessionProvider>
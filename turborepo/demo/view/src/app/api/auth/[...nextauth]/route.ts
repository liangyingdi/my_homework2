import { handlers } from "@view/nextauth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers

// export const dynamicParams = false; // 确保这个动态段在访问时返回 404
// export async function generateStaticParams() {
//   return [];
// }
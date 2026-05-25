import bcrypt from "bcrypt"

export async function validateAdminLogin(
  email: string,
  password: string
) {

  console.log(email)
  console.log(process.env.ADMIN_EMAIL)

  console.log(password)
  console.log(
    process.env.ADMIN_PASSWORD_HASH
  )

  if (
    email.trim().toLowerCase() !==
    process.env.ADMIN_EMAIL
      ?.trim()
      .toLowerCase()
  ) {

    console.log("EMAIL INVALIDO")

    return false
  }

  const valid =
    await bcrypt.compare(
      password,
      process.env.ADMIN_PASSWORD_HASH!
    )

  console.log(valid)

  return valid
}
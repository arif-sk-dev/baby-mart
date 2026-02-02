
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import { motion } from "motion/react"
// import { useState } from "react"


// const Login = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const = useNavigate();

//   return (
//     <div className="flex items-center justify-center min-h-screen w-full bg-linear-to-br from-indigo-400 via-purple-400 to-pink-400 ">
//       <motion.div initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: "easeIn" }}
//         className="w-full max-w-md px-4">
//         <Card className="w-full bg-white/95 backdrop-blur-sm shadow-xl border-gray-200">
//           <CardHeader className="text-center space-y-2">
//             <motion.div initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeIn" }}
//             >
//               <CardTitle className="text-3xl font-bold text-gray-800">Admin Dashboard
//               </CardTitle>
//               <CardDescription className="text-gray-500">
//                 Enter your credentials to sign in
//               </CardDescription>
//             </motion.div>
//           </CardHeader>
//           <CardContent>
//             <FieldSet className="w-full max-w-xs mx-auto">
//               <FieldGroup>
//                 <Field>
//                   <FieldLabel htmlFor="username">Email</FieldLabel>
//                   <Input id="username" type="text" placeholder="Your Username/Email" />
//                   {/* <FieldDescription>
//                     Choose a unique username for your account.
//                   </FieldDescription> */}
//                 </Field>
//                 <Field>
//                   <FieldLabel htmlFor="password">Password</FieldLabel>
//                   <FieldDescription>
//                     Must be at least 8 characters long.
//                   </FieldDescription>
//                   <Input id="password" type="password" placeholder="••••••••" />
//                 </Field>
//               </FieldGroup>
//             </FieldSet>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   )
// }

// export default Login
// -----------------------------------------------------------

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter } from "@/components/ui/card"
import {
  Field,
  FieldLabel,
  FieldError,
  FieldSet,
} from "@/components/ui/field"
import { motion } from "framer-motion"
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { loginSchema } from "@/lib/validation"
// import { useNavigate } from "react-router-dom"

// const schema = z.object({
//   email: z.string().email("Invalid Email"),
//   password: z.string().min(6, "Password at least 6 characters"),
// })


//1: 
type FormData = z.infer<typeof loginSchema>

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  //2: 
  // const form = useForm <FormData>({
  //   resolver: zodResolver(loginSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   }
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormData) => {
    setIsLoading(true)
    console.log("Login data:", data)
    // TODO: API call here
    setTimeout(() => {
      setIsLoading(false)
      navigate("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="p-6 shadow-xl">
          <h1 className="text-3xl font-bold text-center text-gray-800">Admin Dashboard</h1>
          <CardDescription className="text-gray-500 text-center">
            Enter your credentials to sign in
          </CardDescription>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FieldSet>
              {/* <FieldLegend>Enter your credentials to sign in</FieldLegend> */}

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" {...register("email")} placeholder="yourmail@example.com" disabled={isLoading} />
                {/* <FieldDescription>Enter a valid Email</FieldDescription> */}
                {errors.email && <FieldError>{errors.email.message}</FieldError>}
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" {...register("password")} placeholder="Enter your password" />
                {/* <FieldDescription>Password at least 6 characters</FieldDescription> */}
                {errors.password && <FieldError>{errors.password.message}</FieldError>}
              </Field>
            </FieldSet>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </Button>

            <CardFooter className="flex items-center justify-center">
              <p className="text-sm text-gray-600  flex gap-4">Don't have an account<Link to={"/register"} className="text-indigo-600 hover:text-indigo-800 hover:underline hoverEffect" >Sign up</Link> </p>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  )
}
// -------------------------------------------------------


// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Card, CardDescription } from "@/components/ui/card"
// import {
//   Field,
//   FieldLabel,
//   FieldError,
//   FieldSet,
// } from "@/components/ui/field"
// import { motion } from "framer-motion"
// import { useState } from "react"
// import { useNavigate } from "react-router"




// export default function Login() {
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const form =useForm

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-md"
//       >
//         <Card className="p-6 shadow-xl">
//           <h1 className="text-3xl font-bold text-center text-gray-800">Admin Dashboard</h1>
//           <CardDescription className="text-gray-500 text-center">
//             Enter your credentials to sign in
//           </CardDescription>

//           <form className="space-y-6">
//             <FieldSet>
//               <Field>
//                 <FieldLabel htmlFor="email">Email</FieldLabel>
//                 <Input id="email" type="email" placeholder="Enter a valid Email" />
//                 {/* <FieldDescription>Enter a valid Email</FieldDescription> */}
//                 <FieldError>Invalid Email</FieldError>
//               </Field>

//               <Field>
//                 <FieldLabel htmlFor="password">Password</FieldLabel>
//                 <Input id="password" type="password" placeholder="Password at least 6 characters" />
//                 {/* <FieldDescription>Password at least 6 characters</FieldDescription> */}
//                 <FieldError>Password at least 6 characters</FieldError>
//               </Field>
//             </FieldSet>

//             <Button type="submit" className="w-full">
//               Login
//             </Button>
//           </form>
//         </Card>
//       </motion.div>
//     </div>
//   )
// }


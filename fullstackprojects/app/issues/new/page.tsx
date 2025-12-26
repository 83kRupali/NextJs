// "use client"
// import { Button, TextArea, TextField } from '@radix-ui/themes'
// import React from 'react'

// const NewIssuePage = () => {
//   return (
//     <div className='max-w-xl space-y-3'>
//         <TextField.Root>
//             <TextField.Input placeholder='Title' />
//         </TextField.Root>

//         <TextArea placeholder='Description' />

//         <Button>Submit New Issue</Button>
//     </div>
//   )
// }

// export default NewIssuePage




























// "use client";
// import { Button, TextArea, TextField } from "@radix-ui/themes";
// import React from "react";
// import "easymde/dist/easymde.min.css";

// import SimpleMdeReact from "react-simplemde-editor";
// import { useForm, Controller } from "react-hook-form";



// interface IssueForm{
//   title:string;
//   description:string;
// }

// const NewIssuePage = () => {

//   const {register, control, handleSubmit} = useForm<IssueForm>();
//   console.log(register('title'))

//   return (
//     <form 
//       className="max-w-xl space-y-3" 
//       onSubmit={handleSubmit((data) => console.log(data))}
//     >
//       <TextField.Root variant="surface" placeholder="Title" {...register('title')}/>
//       {/* its give the this description new type of wala */}

//       <Controller 
//         name = "description"
//         control={control}
//         render={({field}) => <SimpleMdeReact placeholder="Description" {...filed}/>}
//       />

//       <Button>Submit New Issue</Button>
//     </form>
//   );
// };

// export default NewIssuePage;




















// "use client";
// import { Button, TextArea, TextField } from "@radix-ui/themes";
// import React from "react";
// import "easymde/dist/easymde.min.css";

// import SimpleMde from "react-simplemde-editor";
// import { useForm, Controller } from "react-hook-form";
// import axios from "axios";
// import { useRouter } from "next/navigation";



// interface IssueForm {
//   title: string;
//   description: string;
// }

// const NewIssuePage = () => {
//   const router = useRouter();
//   const { register, control, handleSubmit } = useForm<IssueForm>();

//   return (
//     <form
//       className="max-w-xl space-y-3"
//       onSubmit={handleSubmit((data) =>
//         axios.post('/api/issuses', data);
//         router.push('/issues');
//         )}
//     >
     
//     <TextField.Root radius="none" placeholder="Title" {...register("title")} />


//       <Controller
//         name="description"
//         control={control}
//         render={({ field }) => (
//           <SimpleMde placeholder="Description" {...field} />
//         )}
//       />

//       <Button type="submit">Submit New Issue</Button>
//     </form>
//   );
// };

// export default NewIssuePage;

















// "use client";
// import { Button, TextField } from "@radix-ui/themes";
// import React from "react";
// import "easymde/dist/easymde.min.css";

// import SimpleMde from "react-simplemde-editor";
// import { useForm, Controller } from "react-hook-form";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// interface IssueForm {
//   title: string;
//   description: string;
// }

// const NewIssuePage = () => {
//   const router = useRouter();
//   const { register, control, handleSubmit } = useForm<IssueForm>();

//   const onSubmit = async (data: IssueForm) => {
//     try {
//       await axios.post("/api/issues", data);
//       router.push("/issues");
//     } catch (error) {
//       console.log(error)
//     }
//   };

//   return (
//     <form
//       className="max-w-xl space-y-3"
//       onSubmit={handleSubmit(onSubmit)}
//     >
//       <TextField.Root radius="none" placeholder="Title"
//           {...register("title")}/>

//       <Controller
//         name="description"
//         control={control}
//         render={({ field }) => (
//           <SimpleMde placeholder="Description" {...field} />
//         )}
//       />

//       <Button type="submit">Submit New Issue</Button>
//     </form>
//   );
// };

// export default NewIssuePage;































// "use client";
// import { Button, Callout, Spinner, TextField } from "@radix-ui/themes";
// import React, { useState } from "react";
// import "easymde/dist/easymde.min.css";

// import SimpleMdeReact from "react-simplemde-editor";
// import { useForm, Controller } from "react-hook-form";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { createIssueSchema } from "@/app/ValidationSchema";
// import {z} from 'zod';
// import ErrorMessage from "@/app/components/ErrorMessage";


// type IssueForm = z.infer<typeof createIssueSchema>;

// const NewIssuePage = () => {
//   const router = useRouter();
//   const { register, control, handleSubmit, formState : {errors}} = useForm<IssueForm>({
//     resolver:zodResolver(createIssueSchema)
//   });

//   const [error, setError] = useState('');

//   const [isSubmitting, setSubmitting] = useState(false);

//   const onSubmit = async (data: IssueForm) => {
//     try {
//       setSubmitting(true);
//       await axios.post("/api/issues", data);
//       router.push("/issues");
//     } catch (error) {
//       setSubmitting(false);
//       setError('An unexpected error occurred.');
//     }
//   };

//   return (

//     <div className="max-w-xl">
//       {error && (
//         <Callout.Root color="red" className="mb-5">
//           <Callout.Text>{error}</Callout.Text>
//         </Callout.Root>
//       )}
//     <form
//       className="max-w-xl space-y-3"
//       onSubmit={handleSubmit(onSubmit)}
//     >
//       <TextField.Root 
//         radius="none"  
//         placeholder="Title"
//         {...register("title")}
//       />

//       {errors.title && (<ErrorMessage>{errors.title?.message}</ErrorMessage>)}
//       <Controller
//         name="description"
//         control={control}
//         render={({ field }) => (
//           <SimpleMdeReact placeholder="Description" {...field} />
//         )}
//       />

//       <ErrorMessage>{errors.description?.message}</ErrorMessage>
//       <Button disabled={isSubmitting}>Submit New Issue {isSubmitting && <Spinner />}</Button>
//     </form>
//     </div>
//   );
// };

// export default NewIssuePage;


















"use client";

import { Button, Callout, Spinner, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import "easymde/dist/easymde.min.css";

import dynamic from "next/dynamic";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/app/components/ErrorMessage";

/* ✅ SSR-safe editor */
const SimpleMdeReact = dynamic(
  () => import("react-simplemde-editor"),
  { ssr: false }
);

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IssueForm>();

  const [error, setError] = useState("");

  const onSubmit = async (data: IssueForm) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <TextField.Root
            placeholder="Title"
            {...register("title", {
              required: "Title is required",
              maxLength: {
                value: 255,
                message: "Title must be under 255 characters",
              },
            })}
        />

        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller
          name="description"
          control={control}
          rules={{ required: "Description is required" }}
          render={({ field }) => (
            <SimpleMdeReact placeholder="Description" {...field} />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button disabled={isSubmitting}>
          Submit New Issue {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;

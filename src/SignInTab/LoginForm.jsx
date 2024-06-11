// import { Box, Button, Grid, Link, TextField } from '@mui/material';
// import React, { useState } from 'react'

// const LoginForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
     
//       console.log('Email:', email);
//       console.log('Password:', password);
//     };
  
//     return (
//         <>
//         <br/><br/><br/><br/>
//       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           id="email"
//           label="Email Address"
//           name="email"
//           autoComplete="email"
//           autoFocus
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//         >
//           Sign In
//         </Button>
//         <Grid container>
//           <Grid item xs>
//             <Link href="#" variant="body2">
//               Forgot password?
//             </Link>
//           </Grid>
//           <Grid item>
//             <Link href="#" variant="body2">
//               {"Don't have an account? Sign Up"}
//             </Link>
//           </Grid>
//         </Grid>
//       </Box>
//       </>
//   )
// }

// export default LoginForm

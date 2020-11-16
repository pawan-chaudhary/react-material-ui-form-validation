import React from 'react';
import { Container,Grid,Button, TextField,Typography } from '@material-ui/core';
import '../App.css';


export default class EntryForm extends React.Component {
state = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    education: "",
    institution: "",
    fullNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError:"",
    educationError: "",
    institutionError: "",
};
change = (e:any) => {
    this.setState({[e.target.name]: e.target.value});
}
validate = ()=> {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let isError = false;
    const errors = {
        fullNameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError:"",
        educationError: "",
        institutionError: "",
    }
    if (this.state.fullName.length < 1){
        isError = true;
        errors.fullNameError = "This field is required";
    }
    else if (this.state.fullName.length < 6){
        isError = true;
        errors.fullNameError = "This field contains at least 6 character"
    }
    if (this.state.email.length < 1){
        isError = true;
        errors.emailError = "This field is required";
    }
    else if (!this.state.email.includes('@')){
        isError = true;
        errors.emailError = "Invalid email";
      }
      if (this.state.password.length < 1){
        isError = true;
        errors.passwordError = "This field is required";
    }
    else if(!passwordRegex.test(this.state.password)) {
        isError = true;
        errors.passwordError = "Password must be at least 8 characters long and must include at least a number and an alphabet."
    }
    if (this.state.confirmPassword.length < 1){
        isError = true;
        errors.confirmPasswordError = "This field is required";
    }
    if (typeof this.state.password !== "undefined" && typeof this.state.confirmPassword !== "undefined") {
        if (this.state.password != this.state.confirmPassword) {
          isError = true;
          errors.passwordError = "Password don't match";
          errors.confirmPasswordError = "Password don't match"
        }
      } 

    if (this.state.education.length < 1){
        isError = true;
        errors.educationError = "This field is required";
    }
    if (this.state.institution.length < 1){
        isError = true;
        errors.institutionError = "This field is required";
    }
    this.setState({
        ...this.state,
        ...errors
      });
    return isError;
    // if (!this.state.fullName){
    //  const fullNameError = "This field is required"
    // }
  }
handleSubmit = (e: any)=>{
    e.preventDefault();
    const err = this.validate();
  if (!err){
      this.setState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        education: "",
        institution: "",
      });
  }
}
    render() {
        return(
            <React.Fragment>
                <Container maxWidth="sm">
                <Typography variant="h6" gutterBottom color="primary">
                    Okhati Solution: Entry Form
                </Typography>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                <TextField id="outlined-basic" label="Full Name" name = "fullName" variant="outlined" fullWidth
                onChange={e => this.change(e) }value = {this.state.fullName} />
                <div style={{fontSize:"12px", color: "red"}}>{this.state.fullNameError}</div>
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextField id="outlined-email-input" label="Email" name = "email" type="email" variant="outlined" fullWidth value = {this.state.email}
             onChange={e => this.setState({email: e.target.value})} />
                <div style={{fontSize:"12px", color: "red"}}>{this.state.emailError}</div>
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextField id="outlined-password-input" label="Password" name="password" type="password" variant="outlined" fullWidth value = {this.state.password}
             onChange={e => this.setState({password: e.target.value})}/>
             <div style={{fontSize:"12px", color: "red"}}>{this.state.passwordError}</div>
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextField id="outlined-password-input" label="Confirm password" name="password" type="password" variant="outlined" fullWidth value = {this.state.confirmPassword}
             onChange={e => this.setState({confirmPassword: e.target.value})}/>
             <div style={{fontSize:"12px", color: "red"}}>{this.state.confirmPasswordError}</div>
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextField id="outlined-basic" label="Education" name = "education" variant="outlined" fullWidth value = {this.state.education}
             onChange={e => this.setState({education: e.target.value})}/>
             <div style={{fontSize:"12px", color: "red"}}>{this.state.educationError}</div>
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextField id="outlined-basic" label="School/University"  name = "institution" variant="outlined" fullWidth value = {this.state.institution}
            onChange={e => this.setState({institution: e.target.value})}/>
            <div style={{fontSize:"12px", color: "red"}}>{this.state.institutionError}</div>
                </Grid>
                <Grid item xs={12} sm={8}>
                <div className="button">
                <Button variant="contained" color="primary" onClick={(e)=> this.handleSubmit(e)}>Submit</Button>
                </div>
                </Grid>
         </Grid>
                </Container>
            </React.Fragment>
        );
    }
}
_checkRepeatEmail = email =>{
    fetch(`${API_URL}/checkemail/`,{
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          email:email,
        })
    })
    .then(response => {
        if(response.status === 400){
          this.setState({
            loading:false
          })
        }
        else if(response.status === 204){
          this.setState({
            loading:false
          })
        }else{
          return response.json();
        }
      })
      .then(json => {
        this.setState({
          authKey: json.authKey,
          isSubmittingEmail: true,
        });
      })
      .catch(error =>{
        console.error(error);
        return { name: "network error", description: "" };
      })
}

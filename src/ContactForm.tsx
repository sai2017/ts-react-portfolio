import * as React from "react";
import styled from "styled-components";
import * as firebase from 'firebase/app';
import '@firebase/functions';
import { config　} from '../src/config/firebase';

firebase.initializeApp(config)

interface State {
  name?: string;
  email?: string;
  contents?: string;
}

const StyledContactForm = styled.div`
  background-color: blue;
`

class ContactForm extends React.Component<State> {

  public state: State = {
    name: "",
    email: "",
    contents: ""
  }

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = e.currentTarget;
    e.preventDefault();
    this.setState({ 
      [name]: value
    })
    let sendMail = firebase.functions().httpsCallable('sendMail');
    sendMail(this.state);
    (document.activeElement as HTMLElement).blur();
  }
  
  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    e.persist();
    this.setState({ 
      [name]: value
    })
  }

  public render() {
    return (
    <StyledContactForm>
      <h2>お問い合わせフォーム</h2>
      <form onSubmit={this.handleSubmit}>
        <div>
          <div>
            <p>お名前</p>
            <p>必須</p>
          </div>
          <div>
          <p>姓<input name="name" type="text" value={this.state.name} onChange={this.handleChange} /></p>
          </div>
        </div>
        <hr></hr>
        <hr></hr>
        <div>
          <div>
            <div>
              <p>メールアドレス</p>
              <p>必須</p>
            </div>
          </div>
          <p><input name="email" type="text" value={this.state.email} onChange={this.handleChange} /></p>
        </div>
        <hr></hr>
        <hr></hr>
        <div>
          <div>
            <div>
              <p>お問合せ内容</p>
              <p>必須</p>
            </div>
          </div>
          <p><input name="contents" type="text" value={this.state.contents} onChange={this.handleChange} /></p>
        </div>
        <hr></hr>
        <button type="submit">送信</button>
      </form>
    </StyledContactForm>
    )
  }
};

export default ContactForm;
import { Component, Prop } from '@stencil/core';

@Component({
 tag: 'mn-error',
 styleUrl: 'mn-error.scss',
 shadow: true
})
export class MnError {
  @Prop() error: string;
  @Prop() errors: [];

  componentWillLoad(){
  }

  componentDidLoad(){
  }

  componentWillUpdate(){
  }

  componentDidUpdate(){
  }

  render() {
    return (
          <span>{this.error}</span>
    );
  }
}

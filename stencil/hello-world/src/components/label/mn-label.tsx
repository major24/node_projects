import { Component, Prop } from '@stencil/core';

@Component({
 tag: 'mn-label',
 styleUrl: 'mn-label.scss',
 shadow: true
})
export class MnLabel {
  @Prop() label: string;

  render() {
    return (
      <span>{this.label}</span>
    );
  }
}

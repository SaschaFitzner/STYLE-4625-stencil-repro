import { Component, h, Host } from '@stencil/core';

/**
 * Äußerste Ebene — simuliert einen App-Level Container.
 * Hat einen Relay-Slot der an repro-outer weiterreicht.
 */
@Component({
  tag: 'repro-wrapper',
})
export class ReproWrapper {
  render() {
    return (
      <Host style={{ display: 'block' }}>
        <repro-outer>
          <slot name="action" slot="action" />
          <slot />
        </repro-outer>
      </Host>
    );
  }
}

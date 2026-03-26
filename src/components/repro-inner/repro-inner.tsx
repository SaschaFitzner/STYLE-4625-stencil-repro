import { Component, h, Host } from '@stencil/core';

/**
 * Innere Komponente — simuliert u-data-table-header.
 * Empfängt den Relay-Slot [slot="action"] von repro-outer.
 */
@Component({
  tag: 'repro-inner',
})
export class ReproInner {
  render() {
    return (
      <Host
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 16px',
          background: '#f5f5f5',
        }}
      >
        <strong>Header</strong>
        <div>
          <slot name="action" />
        </div>
      </Host>
    );
  }
}

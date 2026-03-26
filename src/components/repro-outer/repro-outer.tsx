import { Component, h, Host } from '@stencil/core';

/**
 * Äußere Komponente — simuliert u-data-table.
 * Hat einen Relay-Slot: <slot name="action" slot="action" />
 * der den Content an repro-inner weiterreicht.
 */
@Component({
  tag: 'repro-outer',
})
export class ReproOuter {
  render() {
    return (
      <Host style={{ display: 'block', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
        <repro-inner>
          {/* Relay-Slot: Reicht [slot="action"] an repro-inner weiter */}
          <slot name="action" slot="action" />
        </repro-inner>
        <div style={{ padding: '12px 16px' }}>
          <slot />
        </div>
      </Host>
    );
  }
}

import { PILLARS } from './index.js';
import { test } from 'node:test';
import assert from 'node:assert';
test('PILLARS should have 10 items', () => {
    assert.strictEqual(PILLARS.length, 10);
});
test('each pillar should have id, name, description, and icon', () => {
    PILLARS.forEach(p => {
        assert.ok(p.id);
        assert.ok(p.name);
        assert.ok(p.description);
        assert.ok(p.icon);
    });
});
//# sourceMappingURL=index.test.js.map
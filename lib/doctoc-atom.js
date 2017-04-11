'use babel';

import { CompositeDisposable } from 'atom';

export default {
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'doctoc-atom:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    // 非有効化時に呼ばれる.
    // Cleanを書く
    this.subscriptions.dispose();
    this.doctocAtomView.destroy();
  },

  serialize() {
    return {
      doctocAtomViewState: this.doctocAtomView.serialize()
    };
  },

  toggle() {
    console.log('DoctocAtom was toggled!');
  }

};

export const useColors = type =>
  ({
    action: 'var(--actionColor)',
    danger: 'var(--dangerColor)',
    confirm: 'var(--confirmColor)',
  }[type]);

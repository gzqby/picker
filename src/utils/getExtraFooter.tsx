import * as React from 'react';
import type { PanelMode, ClosePanel } from '../interface';

export default function getExtraFooter(
  prefixCls: string,
  mode: PanelMode,
  closePanel: ClosePanel,
  renderExtraFooter?: (mode: PanelMode, closePanel: ClosePanel) => React.ReactNode,
) {
  if (!renderExtraFooter) {
    return null;
  }

  return (
    <div className={`${prefixCls}-footer-extra`}>{renderExtraFooter(mode, closePanel)}</div>
  );
}

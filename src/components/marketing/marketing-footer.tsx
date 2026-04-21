interface MarketingFooterProps {
  leftText: string;
  rightText: string;
}

export function MarketingFooter({
  leftText,
  rightText,
}: MarketingFooterProps) {
  return (
    <footer className="marketing-footer">
      <div className="marketing-footer__inner">
        <span>{leftText}</span>
        <span>{rightText}</span>
      </div>
    </footer>
  );
}

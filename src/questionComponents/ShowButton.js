export function ShowButton({ userBackgroundColor, userColor, userBorderRadius, userPadding }) {
  return (
    <div>
      <button style={{ backgroundColor: userBackgroundColor, color: userColor, borderRadius: userBorderRadius, padding: userPadding }}>Start</button>
    </div>
  );
}

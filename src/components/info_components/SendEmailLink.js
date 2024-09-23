export default function SendEmailLink({ mailElements }) {
  const email = "jiajunliu0024@gmail.com";
  const subject = "Subject of the Email";
  const body = "Hello,\n\n Let's have a talk.\n\nBest regards!";

  // Construct the mailto link
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a href={mailtoLink}>
      <mailElements />
    </a>
  );
}

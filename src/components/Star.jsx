export const Star = ({ color = "#2563EB", ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden={props["aria-hidden"] ?? "false"}
    {...props}
  >
    <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.602L19.335 24 12 19.897 4.665 24l1.585-8.648L.5 9.75l7.832-1.732L12 .587z" />
  </svg>
);

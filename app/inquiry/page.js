import { Suspense } from "react";
import Inquiry from "../../src/views/Inquiry.jsx";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Inquiry />
    </Suspense>
  );
}

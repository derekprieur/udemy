"use client";

import { formatPrice } from "@/lib/format";

interface CourseEnrollButtonProps {
  courseId: string;
  price: number;
}

const CourseEnrollButton = ({ courseId, price }: CourseEnrollButtonProps) => {
  return <button>Enroll for {formatPrice(price)}</button>;
};

export default CourseEnrollButton;

export const isTeacher = (userId?: string | null) => {
  const teacherId = process.env.NEXT_PUBLIC_TEACHER_ID;

  if (!userId || !teacherId) {
    return false;
  }

  const teacherIds = teacherId.split(',');

  return teacherIds.includes(userId);
}



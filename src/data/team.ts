export interface TeamMember {
  name: string;
  role?: string;
  initial: string;
  email: string;
}

export const team: TeamMember[] = [
  { name: "Muhammad Azzhafran Nur", role: "Team Leader", initial: "A", email: "muhammadazzhafran55@gmail.com" },
  { name: "Alisyar Azis Muhara", role: "Researcher", initial: "A", email: "alisyarmuhara@gmail.com" },
  { name: "Muhammad 'Adl Asshodiq", role: "Researcher", initial: "A", email: "m.a.asshodiqihbs@gmail.com" },
  { name: "Muhammad Hafiz Alfatih", role: "Web Designer", initial: "H", email: "me.not.hafiz@gmail.com" },
  { name: "Raffa Ahmad Al-Aula", role: "Graphic Designer", initial: "R", email: "raahmadfa@gmail.com" },
];

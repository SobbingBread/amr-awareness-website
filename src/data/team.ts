export interface TeamMember {
  name: string;
  role?: string;
  initial: string;
  email: string;
}

export const team: TeamMember[] = [
  { name: "Muhammad Azzhafran Nur", role: "Team Leader", initial: "A", email: "azzhafrannur@gmail.com" },
  { name: "Alisyar Azis Muhara", initial: "A", email: "alisyarazismuhara@gmail.com" },
  { name: "Muhammad 'Adl Asshodiq", initial: "A", email: "muhammadadliasshodiq@gmail.com" },
  { name: "Muhammad Hafiz Alfatih", initial: "H", email: "m.hafiz.alfatih@gmail.com" },
  { name: "Raffa Ahmad Al-Aula", initial: "R", email: "raffaahmadaula@gmail.com" },
];

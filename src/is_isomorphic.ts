import { assertEquals } from "@std/assert";

function isIsomorphic(s: string, t: string): boolean {
  const sChars = s.split('');
  const tChars = t.split('');
  const StoT = new Map<string, string>();
  const TtoS = new Map<string, string>();

  for (let i = 0; i < sChars.length; i++) {
    const c1 = sChars[i];
    const c2 = tChars[i];

    if (!StoT.has(c1) && !TtoS.has(c2)){
      StoT.set(c1, c2);
      TtoS.set(c2, c1);
    } else if (!(StoT.get(c1) === c2 && TtoS.get(c2) === c1)) {
      return false;
    }
  }
  return true;
}

assertEquals(isIsomorphic('egg', 'add'), true);
assertEquals(isIsomorphic('foo', 'bar'), false);
assertEquals(isIsomorphic('paper', 'title'), true);
assertEquals(isIsomorphic('badc', 'baba'), false);

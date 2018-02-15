from collections import defaultdict
from unidecode import unidecode
import csv
import re
VOWELS = "aeiouyęą"
CASES = ['NOM', 'GEN', 'DAT', 'ACC', 'INS', 'VOC']
ENDINGS = {"MN": ['', 'a', 'owi', 'a', 'em', 'ie'],
           "MNl": ['', 'a', 'owi', 'a', 'em', 'e'],
           "MNsz": ['', 'a', 'owi', 'a', 'em', 'u'],
           "MNk": ['', 'a', 'owi', 'a', 'iem', 'u'],
           "MNr": ['', 'a', 'owi', 'a', 'em', 'ze'],
           "MNa": ['', 'ego', 'owi', 'ego', 'ym', 'y'],
           "MA": ['', 'ego', 'emu', 'ego', 'm', ''],
           "FN": ['', 'y', 'ie', 'ę', 'ą', 'o'],
           "FNr": ['', 'y', 'ze', 'ę', 'ą', 'o'],
           "FNk": ['', 'i', 'e', 'ę', 'ą', 'o'],
           "FNj": ['', 'i', 'i', 'ę', 'ą', 'o'],
           "FNsi": ['', '', '', 'ę', 'ą', 'u'],
           "FA": ['a', 'ej', 'ej', 'ą', 'ą', 'a']}
MOD = {None: lambda x:x,
       "LAST_VOWEL": lambda x:re.sub(r"[{}]([^{}]*)$".format(VOWELS, VOWELS), r"\1", x),
       "LAST_VOWELS": lambda x:re.sub(r"[{}]*([^{}]*)$".format(VOWELS, VOWELS), r"\1", x),
       "LAST_VOWEL_SOFT": lambda x: re.sub(r"[{}]*([^{}]*)$".format(VOWELS, VOWELS), "\u0301\\1", x),
       "LAST_CONST_LSTRIP": lambda x: re.sub("ł$", "l", x),
       "FEM_SUFFIX_ADJUST": lambda x: re.sub("i$", "", x),
       "FEM_KT_C": lambda x:re.sub("[kt]([^kt]*$)", r"c\1", x),
       "FEM_D_DZ": lambda x:re.sub("[d]([^d]*$)", r"dz\1", x),
       }

MOD_CASES = {
    "LAST_VOWEL": range(1,6),
    "LAST_VOWELS": range(1,6),
    "LAST_CONST_LSTRIP": [5],
    "LAST_VOWEL_SOFT": range(1,6),
    "FEM_SUFFIX_ADJUST": [0,3,4,5],
    "FEM_KT_C": [2],
    "FEM_D_DZ": [2],
    None: []
}

class Declinable():
    def __init__(self, stem, nclass, mods=None):
        self.stem = stem
        self.nclass = nclass
        self.mods = mods if mods else []


    def decl(self, case_no):
        s = self.stem
        for mod in self.mods:
         s = MOD[mod](s) if case_no in MOD_CASES[mod] else s
        return s + ENDINGS[self.nclass][case_no]

    def nom(self):
        return self.decl(0)

    def gen(self):
        return self.decl(1)

    def dat(self):
        return self.decl(2)

    def acc(self):
        return self.decl(3)

    def ins(self):
        return self.decl(4)

    def voc(self):
        return self.decl(5)

    def all(self):
        return " ".join("{}:{}".format(case,self.decl(i)) for i,case in enumerate(CASES))


class frase(Declinable):
    def __init__(self, *words):
        self.words = words

    def decl(self, case_no):
        return " ".join(word.decl(case_no) for word in self.words)


def read_file(fn, gen, default_nclass=None, add_mods=[]):
    C = []
    cr = csv.reader(open(fn))
    for line in cr:
        tokens = line
        stem, nclass, *mods = tokens + [None]
        if not nclass:
            nclass = default_nclass
        if nclass.startswith('S'):
            nclass = re.sub('^S', gen, nclass)
        C.append(Declinable(stem, nclass, mods+add_mods))
    return C


masc_given_fn="GivenNamesM.txt"
fem_given_fn="GivenNamesF.txt"
surnames_fn="Surnames.txt"
MG=read_file(masc_given_fn, "M", "MN")
FG=read_file(fem_given_fn, "F", "FN", ["LAST_VOWEL"])
MS=read_file(surnames_fn, "M", "MA")
FS=read_file(surnames_fn, "F", "FA", ["FEM_SUFFIX_ADJUST"])

N = []
for fs in FS:
    for fg in FG:
        N.append(frase(fg, fs))
for ms in MS:
    for mg in MG:
        N.append(frase(mg, ms))
        pass

out_lines = []
for m in N:
    out_lines.append("{}'s house: dom {}".format(m.nom(), m.gen()))
    out_lines.append("kiss {}: daj buzi {}".format(m.nom(), m.dat()))
    out_lines.append("thanks to {}: dzięki {}".format(m.nom(), m.dat()))
    out_lines.append("with {}: z {}".format(m.nom(), m.ins()))
    out_lines.append("without {}: bez {}".format(m.nom(), m.gen()))
    out_lines.append("this is for {}: to jest dla {}".format(m.nom(), m.gen()))
    out_lines.append("by {}: przez {}".format(m.nom(), m.acc()))
    out_lines.append("(hey) {}!: {}".format(m.nom(), m.voc()))
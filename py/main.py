import pandas as pd


def separate(s):
    toreturn = ""
    for i in range(len(s)-1):
        toreturn += s[i]
        if s[i].islower() and s[i + 1].isupper():
            toreturn += "   "  # because tab character is inserted as '\t' to df
    toreturn += s[len(s)-1]
    return toreturn


df = pd.read_csv("tesztadatforras.csv", '\t')

df['link'] = df['link'].apply(lambda s: s.replace('?utm_source=google_shopping&utm_medium=cpp&utm_campaign=direct_link', '?utm_source=hd-test'))

df = df[df['description'].apply(lambda s: 'mosópisztoly' not in s)]

df['description'] = df['description'].apply(lambda s: separate(s))

# TODO database

# TODO sql

# TODO opt: http req

print(df.to_string())





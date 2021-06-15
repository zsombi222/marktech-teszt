import pandas as pd
from sqlalchemy import create_engine


def separate(s):
    toreturn = ""
    for i in range(len(s)-1):
        toreturn += s[i]
        if s[i].islower() and s[i + 1].isupper():
            toreturn += "   "  # because tab character is inserted as '\t' to df
    toreturn += s[len(s)-1]
    return toreturn


def main():
    # read file
    df = pd.read_csv("tesztadatforras.csv", '\t')

    # change link
    df['link'] = df['link'].apply(lambda s: s.replace('?utm_source=google_shopping&utm_medium=cpp&utm_campaign=direct_link', '?utm_source=hd-test'))

    # filter mosopisztoly
    df = df[df['description'].apply(lambda s: 'mosópisztoly' not in s)]

    # separate description
    df['description'] = df['description'].apply(lambda s: separate(s))

    # db conn
    engine = create_engine('sqlite://', echo=False)
    df.to_sql('tesztadatok', con=engine)


    # dump sql
    print('\n\n**** sqldump ****\n\n')
    con = engine.raw_connection()
    for i in con.iterdump():
        print(i)

    # print dataframe not in db
    print('\n\n**** dataframe ****\n\n')
    print(df.to_string())


main()



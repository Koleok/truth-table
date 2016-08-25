# Truth table

## Javascript is an odd fellow, and its take on equality is a constant reminder of this

So install this

```shell
npm i -g truth-table
```

run this

```shell
truth-table
```

... and you should see an adorable, difficult to read, javascript equality table right in your terminal.
_kind of like this_

```
                                                u    -
                                                n  I  I
                              "                 d  n  n
                           "  f                 e  f  f
               f           t  a                 f  i  i
            t  a           r  l        "     n  i  n  n        [
            r  l           u  s  "  "  -     u  n  i  i        [  [  [  N
            u  s        -  e  e  1  0  1  "  l  e  t  t  [  {  ]  0  1  a
            e  e  1  0  1  "  "  "  "  "  "  l  d  y  y  ]  }  ]  ]  ]  N
           ______________________________________________________________
true      | =  ≠  ≅  ≠  ≠  ≠  ≠  ≅  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≅  ≠
false     | ≠  =  ≠  ≅  ≠  ≠  ≠  ≠  ≅  ≠  ≅  ≠  ≠  ≠  ≠  ≅  ≠  ≅  ≅  ≠  ≠
1         | ≅  ≠  =  ≠  ≠  ≠  ≠  ≅  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≅  ≠
0         | ≠  ≅  ≠  =  ≠  ≠  ≠  ≠  ≅  ≠  ≅  ≠  ≠  ≠  ≠  ≅  ≠  ≅  ≅  ≠  ≠
-1        | ≠  ≠  ≠  ≠  =  ≠  ≠  ≠  ≠  ≅  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠
"true"    | ≠  ≠  ≠  ≠  ≠  =  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠
"false"   | ≠  ≠  ≠  ≠  ≠  ≠  =  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠
"1"       | ≅  ≠  ≅  ≠  ≠  ≠  ≠  =  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≅  ≠
"0"       | ≠  ≅  ≠  ≅  ≠  ≠  ≠  ≠  =  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≅  ≠  ≠
"-1"      | ≠  ≠  ≠  ≠  ≅  ≠  ≠  ≠  ≠  =  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠
""        | ≠  ≅  ≠  ≅  ≠  ≠  ≠  ≠  ≠  ≠  =  ≠  ≠  ≠  ≠  ≅  ≠  ≅  ≠  ≠  ≠
null      | ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  =  ≅  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠
undefined | ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≅  =  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠
Infinity  | ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  =  ≠  ≠  ≠  ≠  ≠  ≠  ≠
-Infinity | ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  =  ≠  ≠  ≠  ≠  ≠  ≠
[]        | ≠  ≅  ≠  ≅  ≠  ≠  ≠  ≠  ≠  ≠  ≅  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠
{}        | ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠
[[]]      | ≠  ≅  ≠  ≅  ≠  ≠  ≠  ≠  ≠  ≠  ≅  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠
[0]       | ≠  ≅  ≠  ≅  ≠  ≠  ≠  ≠  ≅  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠
[1]       | ≅  ≠  ≅  ≠  ≠  ≠  ≠  ≅  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠
NaN       | ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠  ≠
```

## you're welcome :)

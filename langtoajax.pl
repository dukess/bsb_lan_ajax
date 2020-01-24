#!/usr/bin/perl
# Run this script after adding entries to a language file to prevent compiler warnings
use bytes;

# Create language-independed definitions, based on German language
$file = "LANG_DE.h";
chomp($file);
print "$file\n";
open( IN,   $file );
open( OUT,  ">UNDEF_LANG_C.h" );
open( OUT1, ">LANG_C.h" );
while ( $line = <IN> ) {
    if ( !( $line =~ /^\/\// ) ) {
        if ( $line =~ /#define (.*?) / ) {
            $stringname = $1;
            $stringname1 = $1;
#            $stringname1 =~ s/_TEXT/_TXT/; # Save ~3 kB
#            $stringname1 =~ s/_TEXT//; # Save ~14 kB
            print OUT "#undef $stringname\n";
            print OUT1 "#define $stringname \"$stringname1\"\n";
#            print OUT1 "#define $stringname \"\"\n";
        }
        else {
            print OUT "$line";
            print OUT1 "$line";
        }
    }
    else {
        print OUT "$line";
        print OUT1 "$line";
    }
}
close IN;
close OUT;
close OUT1;

# Create JavaScript language files for Web-AJAX infterface.
@files = `ls LANG*.h`;
foreach $file (@files) {
    chomp($file);
    print "$file\n";
    if ( $file ne "LANG_C.h" ) {
        open( IN, $file );
        my @file1 = ( ( lc $file ) =~ /(.*?)\.h/g );
        print "$file1[0]\n";

        open( OUT, ">$file1[0].js" );
        while ( $line = <IN> ) {
            if ( !( $line =~ /^\/\// ) ) {
                if ( $line =~ /#define (.*?) \"(.*?)\"/ ) {
                    $stringname = $1;
                    print OUT "UIStrings[\"$stringname\"] = \"$2\";\n";
                }
                else {
                    print OUT "$line";
                }
            }
            else {
                print OUT "$line";
            }
        }
        close IN;
        close OUT;
        system ("gzip -9 -k -N ${file1[0]}.js");
        if ( $? != 0 ) {print "Can't gzip file ${file1[0]}.js\n";}
    }
}

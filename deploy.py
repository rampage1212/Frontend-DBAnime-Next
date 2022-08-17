import os, sys, asyncio

async def main() -> os.system:
    os.system('rm -rf out/ .next')

    print("1.master\n2.github pages\n3.both")
    choice =  int(input("choose you action: "))
    if choice == 1:
        input1 = input("commit for master: ")
        if len(input1) == 0:
            return print("\nmaster commit couldn't blank !")
        push = os.system('git add . && git commit -m \"'+input1+'\" && git push origin master')
        return push
    elif choice == 2:
        input2 = input("commit for github pages(optional): ")
        if len(input2) == 0:
            input2 = "Deployed 🚀"
            build = os.system('yarn master')
            push2 = os.system('git add -f out && git commit -n -m \"'+input2+'\"&& git subtree push --prefix out web gh-pages')
            return build, push2
        build = os.system('yarn master')
        push2 = os.system('git add -f out && git commit -n -m \"'+input2+'\"&& git subtree push --prefix out web gh-pages')
        return build, push2
    elif choice == 3:
        input1 = input("commit for master: ")
        input2 = input("commit for github pages(optional): ")
        if len(input1) == 0:
            return print("master commit couldn't blank !")
        if len(input2) == 0:
            input2 = "Deployed 🚀"
            push3 = os.system('git add . && git commit -m \"'+input1+'\" && git push origin master')
            build = os.system('yarn master')
            push4 = os.system('git add -f out && git commit -n -m \"'+input2+'\"&& git subtree push --prefix out web gh-pages')
            return push3, build, push4
        push3 = os.system('git add . && git commit -m \"'+input1+'\" && git push origin master')
        build = os.system('yarn  master')
        push4 = os.system('git add -f out && git commit -n -m \"'+input2+'\"&& git subtree push --prefix out web gh-pages')
        return push3,build, push4
    else:
        print("you not choose anything so i'll exit")
        sys.exit()

if __name__ == '__main__':
    os.system('clear')
    print("REMEMBER\n you are not required to fill commits for github pages")
    asyncio.run(main())
    os.system('touch out/.nojekyll')
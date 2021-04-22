import os
from tkinter import *
from tkinter import filedialog
from tkinter import Button
current_dir = os.getcwd()
root = Tk()
root.title('Kruskal')
root.geometry("500x450")
def open_txt():
	text_file = filedialog.askopenfilename(initialdir=current_dir, title="Open text", filetypes=(("Text Files", "*.txt"),))
	text_file = open(text_file, 'r')
	stuff = text_file.read()
	my_text.insert(END, stuff)
	text_file.close()
def save_txt():
	text_file = filedialog.askopenfilename(initialdir=current_dir, title="Open text", filetypes=(("Text Files", "*.txt"),))
	text_file = open(text_file, 'w')
	text_file.write(my_text.get(1.0, END))
	text_file.close()
my_text = Text(root,width=40, height=10, font = ("Helvetica",16))
my_text.pack(pady=20)
open_button = Button(root,text="Open text file", command=open_txt)
open_button.pack(pady=20)

save_button = Button(root,text="Save text file",command=save_txt)
save_button.pack(pady=20)
root.mainloop()